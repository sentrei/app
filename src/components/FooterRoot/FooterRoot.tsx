import DarkModeForm from "@/components/DarkModeForm";

export default function FooterRoot(): JSX.Element {
  return (
    <footer className="bg-white border-t border-gray-100 dark:border-gray-700 dark:bg-black">
      <div className="flex flex-col items-center justify-between max-w-3xl px-12 pt-6 pb-12 mx-auto md:flex-row">
        <p className="mt-4 text-base font-medium text-center text-gray-400 md:text-left">
          &copy; 2020 Sentrei, Inc. All rights reserved.
        </p>
        <DarkModeForm />
      </div>
    </footer>
  );
}
