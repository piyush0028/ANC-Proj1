"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { instagramLinkData } from "./instagramLinkData"; // Adjust the import path as per your project structure

const CalendarView = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    script.onload = () => {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      }
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="relative overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-5 text-3xl font-bold text-black dark:text-white">
            Upcoming Events & Workshops
          </h2>
          <p className="mb-5 text-lg text-black dark:text-white">
            The Product Club organizes a variety of events and workshops aimed at innovation and entrepreneurship among students. Join us for engaging sessions on product development, startup strategies, and industry insights. Stay updated with our calendar to participate in our upcoming activities.
          </p>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-primary px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-primary-dark"
          >
            View Calendar
          </a>
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-10"
        >
          <h3 className="mb-5 text-2xl font-bold text-black dark:text-white">
            Latest Posts
          </h3>
          <Swiper
            spaceBetween={30}
            slidesPerView={3}
            modules={[Pagination, Navigation, Autoplay]}
            pagination={{ clickable: true }}
            navigation={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop={true}
            speed={2000}
            className="h-full dark:block object-cover w-full  transition-opacity duration-500 ease-in-out"
          >
            {instagramLinkData.map((post) => (
              <SwiperSlide key={post.id}>
                <div className="instagram-post" style={{ maxWidth: "540px", margin: "0 auto" }}>
                  <blockquote
                    className="instagram-media"
                    data-instgrm-permalink={post.url}
                    data-instgrm-version="14"
                    style={{
                      background: "#FFFFFF",
                      border: 0,
                      borderRadius: 0,
                      margin: 0,
                      padding: "50px",
                      maxWidth: "540px",
                      width: "100%",
                      boxShadow: "none",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  ></blockquote>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default CalendarView;
