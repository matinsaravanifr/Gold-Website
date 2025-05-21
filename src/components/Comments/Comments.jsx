import React from "react";
import CommentCard from "../CommentCard/CommentCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
export default function Comments() {
  const comments = [
    {
      name: "jhon i",
      date: "12/04/2023",
      comment:
        "The shipping was really fast and the gold quality exceeded my expectations. Highly recommend this store.",
    },
    {
      name: "mary s",
      date: "05/11/2022",
      comment:
        "I loved the elegant packaging and the overall buying experience was smooth and hassle-free.",
    },
    {
      name: "alex k",
      date: "22/07/2023",
      comment:
        "Affordable prices combined with a great variety of designs made my purchase very satisfying.",
    },
    {
      name: "lisa m",
      date: "18/03/2023",
      comment:
        "Customer support was very helpful and responsive, making my shopping easy and enjoyable.",
    },
    {
      name: "mike t",
      date: "30/01/2023",
      comment:
        "The item arrived exactly as described on the website. I’m very happy with my purchase.",
    },
    {
      name: "nina b",
      date: "14/06/2022",
      comment:
        "My order was delivered on time and the packaging ensured everything arrived safely.",
    },
    {
      name: "paul r",
      date: "27/08/2023",
      comment:
        "The website is user-friendly and the checkout process was quick without any issues.",
    },
    {
      name: "sara j",
      date: "09/10/2022",
      comment:
        "I appreciated the great discounts and fast delivery service offered by this shop.",
    },
    {
      name: "dave w",
      date: "04/05/2023",
      comment:
        "Excellent quality of gold products. I highly recommend this store to anyone looking for fine jewelry.",
    },
    {
      name: "emma l",
      date: "21/12/2022",
      comment:
        "Wide selection of beautiful pieces that fit every taste and budget.",
    },
    {
      name: "ryan c",
      date: "15/02/2023",
      comment:
        "I’m very satisfied with my purchase; the gold looks amazing and feels authentic.",
    },
    {
      name: "kate h",
      date: "28/07/2023",
      comment:
        "The site is easy to navigate and the customer support answered all my questions promptly.",
    },
    {
      name: "tom g",
      date: "11/09/2022",
      comment:
        "Their after-sales service was excellent and helped me with a small issue quickly.",
    },
    {
      name: "lily p",
      date: "03/04/2023",
      comment:
        "I would definitely buy from this store again. Great products and service.",
    },
    {
      name: "matt d",
      date: "19/11/2022",
      comment:
        "The delivery was on time and the product arrived in perfect condition.",
    },
    {
      name: "zoe k",
      date: "06/08/2023",
      comment:
        "Competitive prices and quality products make this store stand out from others.",
    },
    {
      name: "jack f",
      date: "23/05/2023",
      comment:
        "Everything about my shopping experience was perfect, from order to delivery.",
    },
    {
      name: "mia s",
      date: "10/10/2022",
      comment:
        "A trustworthy and reliable online jewelry store that I will recommend to friends.",
    },
    {
      name: "leo n",
      date: "01/03/2023",
      comment:
        "The packaging was secure and stylish, giving a premium feel to the product.",
    },
    {
      name: "ella v",
      date: "17/06/2023",
      comment:
        "High quality gold with great variety of styles and designs to choose from.",
    },
    {
      name: "ben t",
      date: "25/09/2022",
      comment:
        "The purchase process was smooth and I received my order without any issues.",
    },
    {
      name: "ava m",
      date: "08/01/2023",
      comment:
        "Customer support was very responsive and helped me with all my inquiries.",
    },
    {
      name: "sam k",
      date: "13/07/2023",
      comment:
        "Excellent product quality and very fast delivery service. I’m impressed.",
    },
    {
      name: "kate r",
      date: "29/03/2023",
      comment:
        "Beautiful designs at fair prices. I’m very happy with my purchase.",
    },
    {
      name: "max d",
      date: "16/11/2022",
      comment:
        "Quick responses from the support team and smooth service throughout.",
    },
    {
      name: "nina f",
      date: "07/05/2023",
      comment:
        "I highly recommend this shop for anyone looking for quality gold jewelry.",
    },
    {
      name: "lucy p",
      date: "20/08/2023",
      comment:
        "From start to finish, the experience was seamless and very enjoyable.",
    },
    {
      name: "ryan j",
      date: "02/12/2022",
      comment:
        "The products arrived exactly as expected and the quality was outstanding.",
    },
    {
      name: "zoe w",
      date: "14/04/2023",
      comment: "I’m very happy with the gold quality and the customer service.",
    },
    {
      name: "max p",
      date: "30/06/2023",
      comment: "Good value for money and the items look fantastic in person.",
    },
  ];

  return (
    <>
      <div className="w-[85%] m-auto mt-10  ">
        <h1 className="text-white font-bold text-center">
          What Our Clients Say About Us
        </h1>
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination]}
            // navigation
            pagination={{ clickable: true }}
            spaceBetween={90}
            slidesPerView={4}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
            className="!pb-10"
          >
            {comments.map((comment, idx) => (
              <SwiperSlide key={idx}>
                <CommentCard
                  name={comment.name}
                  date={comment.date}
                  comment={comment.comment}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}
