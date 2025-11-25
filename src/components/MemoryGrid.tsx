import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

const memories = [
  {
    title: 'Gülüşün',
    description: 'Səni xoşbəxt və gülərüz görərkən mən də sənin adından çox xoşbəxt hissedirdim özümü',
    icon: '😊',
    color: 'from-rose-400 to-pink-500',
  },
  {
    title: 'Günaydın mesajların',
    description: 'Heç birini qaçırmadan, hər səfərində mənə bəzəkli bir günaydın mesajı yazırdın',
    icon: '💌',
    color: 'from-pink-400 to-purple-500',
  },
  {
    title: 'Qucaqlamağın',
    description: 'Hər qucaqlayanda özümü bambaşqa bir dünyadaymış kimi hissedirdim. Çox darıxmışam :(',
    icon: '🤗',
    color: 'from-purple-400 to-indigo-500',
  },
  {
    title: 'Gecələri etdiyimiz söhbətlər',
    description: '2mizində boş olduğu yeganə saat aralığı idi, və o an günün özetindən tutmuş hər şeydən danışırdıq.',
    icon: '🌙',
    color: 'from-indigo-400 to-blue-500',
  },
  {
    title: 'Sənin müzik zevkin',
    description: 'O qədər gözəl bir zövqə sahibsən ki, hələ də mənim üçün düzəltdiyin playlistə qulaq asıram',
    icon: '🎵',
    color: 'from-blue-400 to-cyan-500',
  },
  {
    title: 'Bişirdiyin yeməklər',
    description: 'Böyük yeməklər deyil idilər, ama düşünüb sevgi ilə bişirməyin onları həqiqətən dadlı edirdi',
    icon: '👨‍🍳',
    color: 'from-cyan-400 to-teal-500',
  },
  {
    title: 'Gözlərin',
    description: 'O gözlərinə baxanda insan xəyallara dalır',
    icon: '✨',
    color: 'from-teal-400 to-green-500',
  },
  {
    title: 'Əl-ələ tutuşmağımız',
    description: 'Getdiyimiz hər yerdə, heç vaxt bir-birimizi buraxmırdıq',
    icon: '🤝',
    color: 'from-green-400 to-lime-500',
  },
  {
    title: 'Zarafatlaşmağımız',
    description: 'Bir-birimizin anlayıb etdiyimiz o gözəl və gülməli zarafatlar',
    icon: '🤭',
    color: 'from-lime-400 to-yellow-500',
  },
  {
    title: 'Mehriban ruhun',
    description: 'Hər nə qədər tez əsəbləşən biri olsan belə, yenə də sevdiyin insanlar üçün, aşiq olduğ',
    icon: '💝',
    color: 'from-yellow-400 to-orange-500',
  },
  {
    title: 'Yağışlı günlər',
    description: 'O gözəl günlərdə üşüyərək bir-birimizə bərk yapışıb gəzməyimiz',
    icon: '🌧️',
    color: 'from-orange-400 to-red-500',
  },
  {
    title: 'Xəyalların',
    description: 'Bütün qurmuş olduğun o gözəl xəyalların gerçəkləşəndə yanında olmaq istəyirəm',
    icon: '⭐',
    color: 'from-red-400 to-rose-500',
  },
];

export function MemoryGrid() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {memories.map((memory, index) => (
          <MemoryCard key={index} memory={memory} index={index} />
        ))}
      </div>
    </div>
  );
}

function MemoryCard({ memory, index }: { memory: typeof memories[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ scale: 1.05, rotate: 2 }}
      className="group cursor-pointer"
    >
      <div className={`relative h-full bg-gradient-to-br ${memory.color} rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden`}>
        {/* Background decoration */}
        <div className="absolute top-0 right-0 text-8xl opacity-10 transform translate-x-4 -translate-y-4">
          {memory.icon}
        </div>

        {/* Content */}
        <div className="relative z-10">
          <div className="text-5xl mb-4">{memory.icon}</div>
          <h3 className="text-2xl mb-3 text-white">{memory.title}</h3>
          <p className="text-white/90 leading-relaxed">{memory.description}</p>
        </div>

        {/* Hover effect */}
        <motion.div
          className="absolute inset-0 bg-white/10"
          initial={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  );
}
