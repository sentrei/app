import dynamic from "next/dynamic";

const ImageLogo = dynamic(() => import("@/components/ImageLogo"), {
  ssr: false,
});

export default function HeaderRoot(): JSX.Element {
  return (
    <header className="bg-white border-b-2 border-gray-100 dark:bg-black dark:border-gray-600">
      <div className="container relative z-20 mx-auto">
        <div className="px-4 sm:px-6">
          <div className="flex items-center justify-between py-6 md:justify-start md:space-x-10">
            <div className="lg:w-0 lg:flex-1">
              <ImageLogo />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
