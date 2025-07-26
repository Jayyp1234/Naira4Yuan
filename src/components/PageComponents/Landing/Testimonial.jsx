import React from "react";
// import { testimonials } from "@/data/dataArray";
import { ChevronRightIcon, IconWrapper } from "@/data/Icons";
import { useGetSystemOverviewQuery } from "@/states/services/authApi";

export const Testimonial = () => {
  const { data, isLoading } = useGetSystemOverviewQuery();
  const testimonials = data?.data?.testimonials || [];
  const [activeIndex, setActiveIndex] = React.useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  if (isLoading || testimonials.length === 0) return null;

  // const [activeIndex, setActiveIndex] = React.useState(0);

  // const nextTestimonial = () => {
  // 	setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  // };
  // const prevTestimonial = () => {
  // 	setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  // };

  return (
    <>
      {/* <section className="w-full p-8 mx-auto mt-8 bg-white rounded-lg xl:w-11/12">
        <div className="w-full mx-auto lg:w-11/12 xl:w-10/12">
          <div className="flex items-center justify-end mb-4 gap-x-1">
            <button type="button" onClick={prevTestimonial} className="flex items-center p-2 text-white rounded-full bg-main">
							<IconWrapper className="rotate-180">
								<ChevronRightIcon className="w-7 h-7" />
							</IconWrapper>
						</button>
            <button type="button" onClick={nextTestimonial} className="flex items-center p-2 text-white rounded-full bg-main">
							<IconWrapper>
								<ChevronRightIcon className="w-7 h-7" />
							</IconWrapper>
						</button>
					</div>
					<EachTestimonial testimonial={testimonials[activeIndex]} />
				</div>
			</section>

      <div className="w-full px-0 py-8 mx-auto mt-6 rounded-lg sm:px-8 xl:w-9/12">
        <div className="flex flex-wrap items-stretch w-full gap-8 md:flex-nowrap">
					{testimonials
						.filter((_, index) => index !== activeIndex)
						.map((testimonial, index) => (
							<React.Fragment key={index}>
                <aside className="flex flex-col w-full sm:w-1/2 md:w-1/3 gap-y-4">
									<figure className="rounded-2xl h-[280px] overflow-hidden shadow-sm">
										<img src={testimonial.userImage} alt={testimonial.author} className="h-full w-full object-cover object-[center_30%]" />
									</figure>
                  <div className="flex flex-col flex-grow gap-y-4">
										<h2 className="text-2xl font-[Anton] uppercase truncate">{testimonial.title}</h2>
										<span className="text-justify text-[.9rem] leading-5 flex-grow">{testimonial.description}</span>
									</div>
								</aside>
							</React.Fragment>
						))}
				</div>
				<div className="flex items-center justify-center mt-10">
          <button className="flex items-center py-3 text-white rounded-lg bg-main animate-active px-14 rounded-no-tl" type="button">
						Submit a testimonial
					</button>
				</div>
			</div> */}
      <section className="w-full p-8 mx-auto mt-8 bg-white rounded-lg xl:w-11/12">
        <div className="w-full mx-auto lg:w-11/12 xl:w-10/12">
          <div className="flex items-center justify-end mb-4 gap-x-1">
            <button type="button" onClick={prevTestimonial} className="flex items-center p-2 text-white rounded-full bg-main">
              <IconWrapper className="rotate-180">
                <ChevronRightIcon className="w-7 h-7" />
              </IconWrapper>
            </button>
            <button type="button" onClick={nextTestimonial} className="flex items-center p-2 text-white rounded-full bg-main">
              <IconWrapper>
                <ChevronRightIcon className="w-7 h-7" />
              </IconWrapper>
            </button>
          </div>
          <EachTestimonial testimonial={testimonials[activeIndex]} />
        </div>
      </section>

      <div className="w-full px-0 py-8 mx-auto mt-6 rounded-lg sm:px-8 xl:w-9/12">
        <div className="flex flex-wrap items-stretch w-full gap-8 md:flex-nowrap">
          {testimonials
            .filter((_, index) => index !== activeIndex)
            .map((testimonial, index) => {
              const fullName = `${testimonial.user?.fname || ""} ${testimonial.user?.lname || ""}`;
              return (
                <React.Fragment key={index}>
                  <aside className="flex flex-col w-full sm:w-1/2 md:w-1/3 gap-y-4">
                    <figure className="rounded-2xl h-[280px] overflow-hidden shadow-sm">
                      <img
                        src={testimonial.user?.avatar}
                        alt={fullName}
                        className="h-full w-full object-cover object-[center_30%]"
                      />
                    </figure>
                    <div className="flex flex-col flex-grow gap-y-4">
                      <h2 className="text-2xl font-[Anton] uppercase truncate">{testimonial.title}</h2>
                      <span className="text-justify text-[.9rem] leading-5 flex-grow">{testimonial.content}</span>
                    </div>
                  </aside>
                </React.Fragment>
              );
            })}
        </div>
        <div className="flex items-center justify-center mt-10">
          <button className="flex items-center py-3 text-white rounded-lg bg-main animate-active px-14 rounded-no-tl" type="button">
            Submit a testimonial
          </button>
        </div>
      </div>
    </>
  );
};

export const EachTestimonial = ({ testimonial }) => {
  const { title, content, user, position } = testimonial || {};
  const fullName = `${user?.fname || ""} ${user?.lname || ""}`;
  const avatar = user?.avatar || "";

  return (
    <section className="grid w-full grid-cols-5 gap-8 md:grid-cols-5" role="presentation">
      <aside className="col-span-full md:col-span-2">
        <figure className="h-[300px] md:h-[420px] w-full max-w-full md:max-w-80 mx-auto overflow-hidden rounded-lg flex items-center justify-center">
          <img
            src={avatar}
            alt={fullName}
            className="h-full w-full object-cover object-[center_30%] md:object-center"
          />
        </figure>
      </aside>
      <aside className="flex flex-col col-span-full md:col-span-3 gap-y-4 text-start md:mt-4">
        <h6 className="text-red-500 uppercase font-[Anton] text-lg">Watch these testimonials</h6>
        <h1 className="text-[#051A2F] uppercase font-[Anton] text-3xl md:text-5xl md:text-balance leading-tight">
          {title}
        </h1>
        <p className="text-slate-700">&quot;{content}&quot;</p>
        <b className="text-[#051A2F] font-bold flex flex-col items-start">
          <span>{fullName}</span>
          {position && <span>{position}</span>}
        </b>
      </aside>
    </section>
  );
};

