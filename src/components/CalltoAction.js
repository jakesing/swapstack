export default function CalltoAction(props) {
  return (
    <div className="bg-indigo-700">
      <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          <span className="block">{props.firstheader}</span>
          <span className="block">{props.secondheader}</span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-indigo-200">
          {props.description}
        </p>
        <a
          href="#"
          className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 sm:w-auto"
        >
          {props.buttontext}
        </a>
      </div>
    </div>
  );
}
