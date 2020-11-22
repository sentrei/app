import dynamic from "next/dynamic";

const ImageLogo = dynamic(() => import("@/components/ImageLogo"), {
  ssr: false,
});

export default function HeaderRoot(): JSX.Element {
  return (
    <header className="border-b-2 border-gray-100">
      <div className="container relative z-20 mx-auto">
        <div className="sm:px-6 px-4">
          <div className="md:justify-start md:space-x-10 flex items-center justify-between py-6">
            <div className="lg:w-0 lg:flex-1">
              <ImageLogo />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
