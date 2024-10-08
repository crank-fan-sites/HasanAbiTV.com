import Link from 'next/link';

const LinkDirectory: React.FC = () => {
  const links = [
    { href: 'https://tiktok.hasanabitv.com', title: 'HasTok Hub', description: 'HasanAbi TikTok clips industrial complex community hub' },
    { href: 'https://hasanhub.com', title: 'HasanHub.com', description: 'HasanAbi YouTube clips industrial complex community hub' },
    { href: 'https://hasanguessr.net', title: 'HasanGuessr', description: 'Like Wordle. Guess Hasan\'s stream clip date. Daily.' },
    { href: 'https://twitch.tv/hasanabi', title: 'Hasan\'s Twitch', description: 'Official Twitch streaming channel' },
    { href: 'https://twitter.com/hasanthehun', title: 'Hasan\'s Twitter', description: 'Official Twitter' },
    { href: 'https://instagram.com/hasandpiker', title: 'Hasan\'s Instagram', description: 'Official Instagram channel' },
    { href: 'https://tiktok.com/hasandpiker', title: 'Hasan\'s TikTok', description: 'Official TikTok channel' },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="space-y-6 max-w-md mx-auto">
        {links.map((link, index) => (
          <Link key={index} href={link.href} className="block">
            <div className="bg-gray-800 hover:bg-gray-700 text-white rounded-lg shadow-lg p-6 transition duration-300">
              <h2 className="text-2xl font-bold mb-2 text-blue-500">{link.title}</h2>
              <p className="text-gray-300 text-green-500">{link.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LinkDirectory;