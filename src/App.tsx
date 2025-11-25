import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'motion/react';
import { FloatingHearts } from './components/FloatingHearts';
import { Timeline } from './components/Timeline';
import { PhotoGallery } from './components/PhotoGallery';
import { MemoryGrid } from './components/MemoryGrid';
import { ApologySection } from './components/ApologySection';

export default function App() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-rose-50 via-pink-50 to-purple-50">
      <FloatingHearts />
      
      {/* Hero Section */}
      <motion.section 
        style={{ opacity, scale }}
        className="relative min-h-screen flex items-center justify-center px-4"
      >
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h1 className="text-7xl md:text-9xl mb-8 text-rose-600">
              Bağışla Bəbəm
            </h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-2xl md:text-3xl text-gray-700 mb-12 leading-relaxed"
          >
            Sənin ilə keçirdiyim hər moment mənim üçün möcüzəvi bir deneyim idi.<br />
            Sənsiz həyatımı təsəvvür edə bilmirəm.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="text-6xl"
          >
            ❤️
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-rose-400 text-4xl"
        >
          ↓
        </motion.div>
      </motion.section>

      <Section>
        <SectionTitle>Bu 14 ay ərzində keçmiş olduğumuz yolculuğumuz</SectionTitle>
        <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16">
          Səni gördüyüm ilk andan etibarən, sənin həqiqətən doğru, sevilməyə layiq, və bir o qədərdə şirin bir insan olduğunu anlamışdım. 
          Gəl birlikdə yaşamış olduğumuz bu uzun yolculuğa geri qayıdaq və nəzər keçirdək.
        </p>
        <Timeline />
      </Section>

      <Section className="bg-white/50 backdrop-blur-sm py-20">
        <SectionTitle>Moments I Cherish</SectionTitle>
        <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16">
          Every photo tells a story, every smile is a memory I hold dear
        </p>
        <PhotoGallery />
      </Section>

      {/* Special Memories */}
      <Section>
        <SectionTitle>Sənin üçün bəlkə xırda amma mənim üçün çox dəyərli məqamlar</SectionTitle>
        <MemoryGrid />
      </Section>

      {/* Apology Section */}
      <Section className="bg-gradient-to-b from-rose-100 to-pink-100 py-20">
        <ApologySection />
      </Section>

      {/* Final Promise */}
      <Section className="min-h-screen flex items-center justify-center">
        <FinalMessage />
      </Section>
    </div>
  );
}

function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
      className={`relative px-4 py-20 ${className}`}
    >
      {children}
    </motion.section>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-5xl md:text-6xl text-center mb-12 text-gray-800">
      {children}
    </h2>
  );
}

function FinalMessage() {
  return (
    <div className="text-center max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-6xl md:text-7xl mb-12 text-rose-600">
          Söz verirəm, Zəhra
        </h2>
        <div className="space-y-6 text-xl md:text-2xl text-gray-700 leading-relaxed">
          <p>
            Daha yaxşısı olmağa çalışacam, daha diqqətli olacam, əlimdən gəldiyi qədər anlayış göstərəcəm.
          </p>
          <p>
            Sənin bütün arzularının çin olması üçün əlimdən gələni edəcəm.
          </p>
          <p>
            Və söz verirəm ki, heç vaxt səni yarı yolda qoymayacam.
          </p>
          <p className="text-3xl mt-12 text-rose-500">
            Sən mənim hərşeyimsən, Səni çox sevirəm Zəhra.
          </p>
        </div>

        <motion.div
          className="mt-16 text-8xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          💕
        </motion.div>

        <p className="mt-12 text-gray-500 italic">
          Həmişə sənin ilə birliktə.
        </p>
      </motion.div>
    </div>
  );
}
