import React from 'react';

const Contact = () => {
    return (
        <section id="contact" class="text-gray-600 body-font bg-indigo-200 relative">
            <div class="container px-5 py-16 mx-auto">
                <div class="flex flex-col text-center w-full mb-4">
                    <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Contact Me</h1>
                    <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Feel free to contact me if  you have any queries.</p>
                </div>
                <div class="p-2 w-full pt-8 mt-4 border-t border-gray-200 text-center">
                    <a href="mailto:delwar.habib@gmail.com" class="text-red-500">delwar.habib@gmail.com</a>
                    <p class="leading-normal my-5">
                        Khilgaon
                        <br />
                        Dhaka - 1219
                    </p>
                </div>

            </div>
        </section>
    );
};

export default Contact;