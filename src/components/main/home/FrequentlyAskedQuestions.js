/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/outline";

const faqs = [
  {
    question: "Who is Swapstack built for?",
    answer:
      "The purpose of Swapstack is to make it easier for brands and newsletter writers to connect. We built Swapstack because we are writers, and we were seeking out an easier way to monetize our work through sponsorships. Right now, we are focusing on newsletter creators. However, our goal is to be every creators sales team, empowering all creators to build their content empire, and monetize it in an easy way.",
  },
  {
    question: "I just started my newsletter, can I use Swapstack?",
    answer:
      "We welcome every writer to try out Swapstack. However, we suggest that any given creator should focus on growing their audience to around 1K subscribers before monetizing. We have a large, lively Slack community for writers with 500+ subscribers, where we share tips, match folks for collaborations and more. You'll recieve an invite to Slack after applying to be part of the platform.",
  },
  {
    question: "How much does Swapstack cost?",
    answer:
      "Free for writers: Swapstack is 100% free for writers, no catches. Writers use Swapstack for free, we help writers find sponsorship opportunities. Platform fee for brands: Swapstack adds a 10% platform + Stripe fees onto any transaction, which the brand covers. This allows us to pay writers 100% of what they earned.",
  },
  {
    question: "I'd like to partner with Swapstack, are you open to connecting?",
    answer:
      "We are very open to partnerships, and would love to work together to figure out the best way to improve the creator monetization experience. Please reach out to us at Jake@swapstack.co and Singer@swapstack.co to set up time.",
  },
  // More questions...
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function FrequentlyAskedQuestions() {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
          <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Frequently asked questions
          </h2>
          <dl className="mt-6 space-y-6 divide-y divide-gray-200">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                        <span className="font-medium text-gray-900">
                          {faq.question}
                        </span>
                        <span className="ml-6 h-7 flex items-center">
                          <ChevronDownIcon
                            className={classNames(
                              open ? "-rotate-180" : "rotate-0",
                              "h-6 w-6 transform"
                            )}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base text-gray-500">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
