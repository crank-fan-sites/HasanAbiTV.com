import Link from 'next/link';

const LinkDirectory: React.FC = () => {
  const links = [
    { href: 'https://tiktok.hasanabitv.com', title: 'HasTok Hub', description: 'HasanAbi TikTok clips industrial complex community hub', image: '/pics/hasan-himbo-selfie.jpg', textColor: 'text-red-500' },
    { href: 'https://hasanhub.com', title: 'HasanHub.com', description: 'HasanAbi YouTube clips industrial complex community hub', image: '/pics/hasan-pink.jpg', blank: true, textColor: 'text-green-500' },
    { href: 'https://hasanguessr.net', title: 'HasanGuessr', description: 'Like Wordle. Guess Hasan\'s stream clip date. Daily.', image: '/pics/hasan-bandana.jpg', blank: true, textColor: 'text-green-500' },
    { href: 'https://twitch.tv/hasanabi', title: 'Hasan\'s Twitch', description: 'Official Twitch streaming channel', image: '/pics/hasanabi-updates.jpg', blank: true, textColor: 'text-blue-500' },
    { href: 'https://twitter.com/hasanthehun', title: 'Hasan\'s Twitter', description: 'Official Twitter', image: '/pics/hasan-rent-free-in-head-original.jpg', blank: true, textColor: 'text-blue-500' },
    { href: 'https://instagram.com/hasandpiker', title: 'Hasan\'s Instagram', description: 'Official Instagram channel', image: '/pics/hasan-antifascist.png', blank: true, textColor: 'text-blue-500' },
    { href: 'https://tiktok.com/hasandpiker', title: 'Hasan\'s TikTok', description: 'Official TikTok channel', image: '/pics/hasan-smiling-clip.jpg', blank: true, textColor: 'text-blue-500' },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="space-y-6 max-w-md mx-auto">
        {links.map((link, index) => (
          <Link key={index} href={link.href} className="block" target={link.blank ? '_blank' : '_self'}>
            <div 
              className="rounded-lg shadow-lg overflow-hidden relative h-48"
              style={link.image ? { backgroundImage: `url(${link.image})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
            >
              <div className={`absolute inset-0 ${link.image ? '' : 'bg-gray-800'}`}>
                <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-70 p-3 pb-1">
                  <h2 className={`text-2xl font-bold mb-2 ${link.textColor}`}>{link.title}</h2>
                  <p className="text-white">{link.description}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LinkDirectory;