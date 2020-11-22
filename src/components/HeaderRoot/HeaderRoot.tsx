import dynamic from "next/dynamic";

const ImageLogo = dynamic(() => import("@/components/ImageLogo"), {
  ssr: false,
});

const HeaderRootSwitch = dynamic(
  () => import("@/components/HeaderRootSwitch"),
  {
    ssr: false,
  }
);

export default function HeaderRoot(): JSX.Element {
  return (
    <header className="bg-white border-b border-gray-100 dark:bg-black dark:border-gray-600">
      <div className="container relative z-20 mx-auto">
        <div className="px-4 sm:px-6">
          <div className="flex items-center justify-between py-6 md:justify-start md:space-x-10">
            <div className="lg:w-0 lg:flex-1">
              <ImageLogo />
            </div>
            <div className="items-center justify-end hidden space-x-8 md:flex md:flex-1 lg:w-0">
              <HeaderRootSwitch />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
