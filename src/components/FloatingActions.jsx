export default function FloatingActions() {
  return (
    <div className="fixed right-4 bottom-4 flex flex-col gap-3">
      <a
        href="https://zalo.me/"
        className="h-11 w-11 rounded-full bg-blue-500 text-white grid place-items-center shadow-lg"
        aria-label="Chat Zalo"
      >
        Z
      </a>
      <a
        href="https://m.me/"
        className="h-11 w-11 rounded-full bg-indigo-600 text-white grid place-items-center shadow-lg"
        aria-label="Messenger"
      >
        M
      </a>
      <a
        href="tel:0932480068"
        className="h-11 w-11 rounded-full bg-emerald-600 text-white grid place-items-center shadow-lg"
        aria-label="Call"
      >
        ☎
      </a>
    </div>
  );
}
