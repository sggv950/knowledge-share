import Link from "next/link";

const features = [
  {
    name: "TDD",
    icon: () => <img src="/react.svg" height="24" width="24" />,
    redirect: '/knowledge-share/tdd/introduction'
  },
];

function Features() {
  return (
    <>
      <div className="grid grid-cols-1 gap-3 my-12">
        {features.map(({ icon: Icon, ...feature }, i) => (
            <Link href={feature.redirect} key={feature.name}>
          <div
            className="flex items-center space-x-4"
            key={feature.name.split(" ").join("-")}
          >
            <div>
              {/*<Icon*/}
              {/*  className="block w-8 h-8"*/}
              {/*  style={{ height: 24, width: 24 }}*/}
              {/*  aria-hidden="true"*/}
              {/*/>*/}
            </div>
            <div>
              <div className="my-0 font-small dark:text-white">
                {feature.name}
              </div>
            </div>
          </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default Features;
