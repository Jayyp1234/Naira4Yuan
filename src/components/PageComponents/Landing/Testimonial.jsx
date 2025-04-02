import React from "react";
import { testimonials } from "@/data/dataArray";
import { ChevronRightIcon, IconWrapper } from "@/data/Icons";

export const Testimonial = () => {
	const [activeIndex, setActiveIndex] = React.useState(0);

	const nextTestimonial = () => {
		setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
	};
	const prevTestimonial = () => {
		setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
	};

	return (
		<>
			<section className="bg-white rounded-lg p-8 w-full xl:w-11/12 mx-auto mt-8">
				<div className="w-full lg:w-11/12 xl:w-10/12 mx-auto">
					<div className="flex items-center justify-end gap-x-1 mb-4">
						<button type="button" onClick={prevTestimonial} className="flex items-center rounded-full bg-main text-white p-2">
							<IconWrapper className="rotate-180">
								<ChevronRightIcon className="w-7 h-7" />
							</IconWrapper>
						</button>
						<button type="button" onClick={nextTestimonial} className="flex items-center rounded-full bg-main text-white p-2">
							<IconWrapper>
								<ChevronRightIcon className="w-7 h-7" />
							</IconWrapper>
						</button>
					</div>
					<EachTestimonial testimonial={testimonials[activeIndex]} />
				</div>
			</section>

			<div className="rounded-lg py-8 sm:px-8 px-0 w-full xl:w-9/12 mx-auto mt-6">
				<div className="w-full flex items-stretch flex-wrap gap-8 md:flex-nowrap">
					{testimonials
						.filter((_, index) => index !== activeIndex)
						.map((testimonial, index) => (
							<React.Fragment key={index}>
								<aside className="w-full sm:w-1/2 md:w-1/3 flex flex-col gap-y-4">
									<figure className="rounded-2xl h-[280px] overflow-hidden shadow-sm">
										<img src={testimonial.userImage} alt={testimonial.author} className="h-full w-full object-cover object-[center_30%]" />
									</figure>
									<div className="flex flex-col gap-y-4 flex-grow">
										<h2 className="text-2xl font-[Anton] uppercase truncate">{testimonial.title}</h2>
										<span className="text-justify text-[.9rem] leading-5 flex-grow">{testimonial.description}</span>
									</div>
								</aside>
							</React.Fragment>
						))}
				</div>
				<div className="flex items-center justify-center mt-10">
					<button className="bg-main text-white rounded-lg flex animate-active px-14 items-center rounded-no-tl py-3" type="button">
						Submit a testimonial
					</button>
				</div>
			</div>
		</>
	);
};

export const EachTestimonial = ({ testimonial }) => {
	return (
		<section className="w-full grid grid-cols-5 md:grid-cols-5 gap-8" role="presentation">
			<aside className="col-span-full md:col-span-2">
				<figure className="h-[300px] md:h-[420px] w-full max-w-full md:max-w-80 mx-auto overflow-hidden rounded-lg flex items-center justify-center">
					<img src={testimonial.userImage} alt="" className="h-full w-full object-cover object-[center_30%] md:object-center" />
				</figure>
			</aside>
			<aside className="col-span-full md:col-span-3 flex flex-col gap-y-4 text-start md:mt-4">
				<h6 className="text-red-500 uppercase font-[Anton] text-lg">Watch these testimonials</h6>
				<h1 className="text-[#051A2F] uppercase font-[Anton] text-3xl md:text-5xl md:text-balance leading-tight">{testimonial?.title}</h1>
				<p className="text-slate-700">"{testimonial?.description}"</p>
				<b className="text-[#051A2F] font-bold flex flex-col items-start">
					<span>{testimonial.author}</span>
					<span>{testimonial?.position}</span>
				</b>
			</aside>
		</section>
	);
};
