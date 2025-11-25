import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const photos = [
  {
    id: 1,
    src: '/src/assets/img5.jpeg',
    caption: 'O gözəl gülüşünə qurban olaram',
    note: 'sənin ən sevdiyim şəklin',
  },
  {
    id: 2,
    src: '/src/assets/img4.jpeg',
    caption: 'Biz Birliktə',
    note: 'Bəbəsim ilə ən gözəl günün eşliğinde',
  },
  {
    id: 3,
    src: '/src/assets/img6.jpg',
    caption: 'Həyatıma saçdığın o pozitiv enerji',
    note: 'Səninlə olarkən, uşaq kimi xoşbəxt hissedirdim.',
  },
  {
    id: 4,
    src: '/src/assets/img3.jpeg',
    caption: 'Birliktə güldüyümüz anlar',
    note: 'Gülüşünü eşitmək üçün hərşeyi edərəm',
  },
  {
    id: 5,
    src: '/src/assets/img2.jpeg',
    caption: 'Minnak yanaklım',
    note: 'Sənin hər şeyinə qurban olum',
  },
  {
    id: 6,
    src: '/src/assets/img1.jpeg',
    caption: 'Birlikdə',
    note: 'Birlikdə bir-birimizə dayaq oluruq',
  },
];

export function PhotoGallery() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {photos.map((photo, index) => (
          <PhotoCard key={photo.id} photo={photo} index={index} />
        ))}
      </div>
    </div>
  );
}

function PhotoCard({ photo, index }: { photo: typeof photos[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, rotateX: -15 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 50, rotateX: -15 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      className="group cursor-pointer"
    >
      <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
        {/* Photo placeholder */}
        <div className="relative aspect-square bg-gradient-to-br from-rose-200 via-pink-200 to-purple-200 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-30">
            📷
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center p-8">
             <img
                src={photo.src}
                alt={photo.caption}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
            <p className="text-white text-lg">{photo.caption}</p>
          </div>
        </div>

        {/* Caption */}
        <div className="p-6">
          <p className="text-gray-700 text-center italic">"{photo.note}"</p>
        </div>
      </div>
    </motion.div>
  );
}
