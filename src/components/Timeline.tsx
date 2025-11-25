import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

const timelineEvents = [
  {
    date: 'İlk tanışlıq',
    title: 'Bir-birimizi ilk dəfə görüşümüz',
    description: 'Ad günümdəki şəkildən mənə qarşı hisslərin yaranmışdı, eyni şəkildə mən də səni ilk dəfə gördüyümdə aşiq olmuşdum.',
    emoji: '✨',
  },
  {
    date: 'İlk Date',
    title: 'Cinnabon',
    description: 'İlk date-imizdə Cinnabonda oturmuşduq. Sənin mənə tövsiyə elədiyin marshmellow-lu şokoladı alıb içmişdim, çox qəşəng idi.',
    emoji: '☕',
  },
  {
    date: 'Sadəcə 2 söz',
    title: 'Səni sevdiyimi dediyim gün',
    description: 'Ay bu gün çox gözəldir, elə deyil mi?',
    emoji: '💖',
  },
  {
    date: 'O gözəl ad günün',
    title: 'Həmişə şad olacağın həmin gün',
    description: 'Dostlarınla ad günü keçirdə bilməmişdin deyə, sənin üçün gözəl bir parti keçirtmişdik.',
    emoji: '🎂',
  },
  {
    date: 'Yeni maceralar axtarışında',
    title: 'Gəzintilərimiz',
    description: 'Hər səfərində səninlə birlikdə yeni maceralar axtarışında idik istər dost çevrəsi, istər gəzinti, istər məkan.',
    emoji: '✈️',
  },
  {
    date: 'Ama indi',
    title: 'Nəyi itirdiyimin fərqinə vardım',
    description: 'Sənsiz keçən hər günüm ilə, səhvlərimə görə sənin qədrini bilmədiyimin fərqinə vardım.',
    emoji: '💔',
  },
];

export function Timeline() {
  return (
    <div className="max-w-5xl mx-auto">
      {timelineEvents.map((event, index) => (
        <TimelineItem key={index} event={event} index={index} />
      ))}
    </div>
  );
}

function TimelineItem({ event, index }: { event: typeof timelineEvents[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const isLeft = index % 2 === 0;

  return (
    <div ref={ref} className="relative mb-16 md:mb-24">
      <div className={`flex flex-col md:flex-row items-center gap-8 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? -50 : 50 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`flex-1 ${isLeft ? 'md:text-right' : 'md:text-left'} text-center md:text-left`}
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <p className="text-rose-500 mb-2">{event.date}</p>
            <h3 className="text-3xl mb-4 text-gray-800">{event.title}</h3>
            <p className="text-gray-600 text-lg leading-relaxed">{event.description}</p>
          </div>
        </motion.div>

        {/* Center Circle */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10"
        >
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-rose-400 to-pink-600 flex items-center justify-center text-3xl shadow-lg">
            {event.emoji}
          </div>
        </motion.div>

        {/* Spacer for layout */}
        <div className="flex-1 hidden md:block" />
      </div>

      {/* Connecting Line */}
      {index < timelineEvents.length - 1 && (
        <motion.div
          initial={{ height: 0 }}
          animate={isInView ? { height: '100%' } : { height: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="absolute left-1/2 -translate-x-1/2 top-20 w-1 bg-gradient-to-b from-rose-300 to-pink-300 -z-10"
          style={{ height: '100%' }}
        />
      )}
    </div>
  );
}
