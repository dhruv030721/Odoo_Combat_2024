import { useEffect, useState } from "react";
import { MdOutlineFitnessCenter } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import ReactPlayer from 'react-player';
import { set_fitnessData } from "../../slices/fitness.slice.js";
import fitnessGoal from "../../services/operations/fitness";
import { useId } from "react";
import Loading from "../Component/loading.jsx";

const Home = () => {
    const fitnessGoalData = useSelector((state) => state.fitness.fitnessGoalData);
    const userData = useSelector((state) => state.auth.userData);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const id = useId();

    useEffect(() => {
        (async () => {
            const response = await fitnessGoal.get_fitness(userData.fitnessgoal);
            dispatch(set_fitnessData(response.data.data));
            setTimeout(() => {
                setLoading(false);
            }, 1000);
        })();
    }, [dispatch, userData.fitnessgoal]);

    if (loading) {
        return (
            <>
                <Loading message={"Loading..."} />
            </>
        )
    }

    return (
        <div className='px-20'>
            <div className='flex justify-between gap-x-52'>
                <div className='py-10 flex-col text-xl'>
                    <div className='flex gap-x-3'>
                        <h1 className=''> Hello, </h1>
                        <h1 className='text-orange-800 font-semibold'>{userData ? userData.name : 'Guest'}</h1>
                    </div>
                    <div className='my-5 text-7xl font-poppins'>
                        <h1 className='italic text-4xl font-semibold'>Get Fit</h1>
                        <h1 className='font-bold text-orange-800'>You Can</h1>
                        <h1 className='font-bold text-orange-800'>& You Will</h1>
                    </div>
                    <p className='w-80 text-lg'>
                        For your convenience; fitness workouts online & in person so you always have the choice.
                    </p>
                </div>
                <div className='p-10'>
                    <img className='w-full h-full object-cover border border-orange-800 p-1' src={"https://wallpapercave.com/wp/wp13351658.jpg"} alt="Fitness" />
                </div>
            </div>

            <section className='my-10 flex flex-col gap-y-5'>
                <div className='flex gap-x-5 text-orange-900'>
                    <MdOutlineFitnessCenter size={25} />
                    <h1 className='font-bold'>Some Featured Exercise Video Related to Your Fitness Goal</h1>
                </div>

                <div className='text-orange-900 font-bold'>
                    <div className="">
                        {fitnessGoalData.map((resource, resourceIndex) => (
                            <div key={`${id}-${resourceIndex}`} className="">
                                <h1 className="py-5">Category: {resource.category}</h1>
                                <div className="grid grid-cols-2 w-full gap-x-20 gap-y-10">
                                    {resource.resources.map((video, videoIndex) => (
                                        <div key={`${id}-${resourceIndex}-${videoIndex}`} className="border w-full border-orange-800 p-1 shadow-lg bg-white">
                                            <ReactPlayer width="100%" url={video} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
