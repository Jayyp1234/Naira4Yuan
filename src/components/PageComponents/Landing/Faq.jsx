import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../ui/accordion";
import { faqsArray } from "@/data/dataArray";
import { IconWrapper, MinusIcon, PlusIcon } from "@/data/Icons";

export const Faq = () => {
	const [openItem, setOpenItem] = React.useState(null);

	const toggleAccordion = (value) => {
		setOpenItem(openItem === value ? null : value);
	};
	return (
		<div className="rounded-lg py-8 w-full xl:w-11/12 mx-auto bg-white mt-16">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 mx-auto w-full md:w-10/12 px-6 md:px-0">
				<aside className="mx-auto w-full sm:w-11/12 md:w-10/12">
					<span className="uppercase text-main text-2xl font-[Anton]">faq</span>
					<h1 className="text-3xl lg:text-6xl text-balance font-[Anton] uppercase leading-relaxed block">
						Your <br className="md:block hidden" />
						questions <br className="md:block hidden" />
						answered
					</h1>
					<div className="mt-4 sm:mt-8 ">
						<span className="font-medium">
							Everything You Need to Know About Naira4yuan, We have Answers to Your Questions About our Services and Approach.
						</span>
					</div>
				</aside>
				<aside>
					<Accordion type="single" collapsible className="mx-auto">
						{faqsArray.map((faq, index) => (
							<AccordionItem key={index} value={`item-${index}`} className="!border-none">
								<AccordionTrigger
									className="flex items-center justify-between text-left border-0 hover:no-underline text-lg text-gray-900 py-3 [&>svg]:hidden text[#051A2F]"
									onClick={() => toggleAccordion(`item-${index}`)}>
									<div className="flex items-center space-x-4">
										<IconWrapper className="bg-gray-800 text-white p-1 rounded-full">
											{openItem === `item-${index}` ? <MinusIcon className="w-4 h-4 " /> : <PlusIcon className="w-4 h-4 " />}
										</IconWrapper>
										<span className="font-[Anton] uppercase">{faq.question}</span>
									</div>
								</AccordionTrigger>

								<AccordionContent className="pl-10 pr-4 pb-4 text-gray-700">
									{faq.subtext && <p className="text-sm text-gray-700 mb-2">{faq.subtext}</p>}

									{Array.isArray(faq.answer) ? (
										<ul className="space-y-1">
											{faq.answer.map((point, i) => (
												<li key={i} className={`font-medium`}>
													<span>{i + 1}.</span>
													<span> {point}</span>
												</li>
											))}
										</ul>
									) : (
										<p>{faq.answer}</p>
									)}

									{faq.note && <p className="mt-3 italic text-gray-500 font-medium">{faq.note}</p>}
								</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</aside>
			</div>
		</div>
	);
};
