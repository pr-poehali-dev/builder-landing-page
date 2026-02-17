import Icon from '@/components/ui/icon';

const TelegramButton = () => {
  return (
    <a
      href="https://t.me/+79119327788"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#0088cc] hover:bg-[#006daa] text-white rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center group"
      aria-label="Написать в Telegram"
    >
      <Icon name="Send" size={32} />
      <span className="absolute right-full mr-3 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Написать в Telegram
      </span>
    </a>
  );
};

export default TelegramButton;
