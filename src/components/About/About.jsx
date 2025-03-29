import React from 'react';

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container px-6 m-auto text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:w-6/12 lg:w-5/12">
                        <img
                            src="/aboutImage.png"
                            className="w-full h-auto"
                            alt="About Us"
                        />
                    </div>
                    <div className="md:w-6/12 lg:w-7/12">
                        <h2 className="text-2xl font-bold text-gray-900 md:text-3xl lg:text-4xl">
                            Be a Champion of YourSelf
                        </h2>
                        <p className="mt-6 text-gray-600 md:text-lg">
                            Interview Prep is your ultimate platform to prepare for technical, behavioral, and managerial interviews across various industries. Our mission is to help job seekers and professionals enhance their interview skills and land their dream jobs. Whether you are a fresh graduate, a career switcher, or a seasoned professional, Interview Prep provides comprehensive tools and resources to help you succeed in every stage of the interview process.
                        </p>
                        <p className="mt-4 text-gray-600 md:text-lg">
                            We provide an extensive collection of interview questions across multiple domains, including software engineering, data science, web development, system design, and more. Each question is accompanied by expert answers and explanations to help you understand the key concepts and strategies behind the solutions.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
