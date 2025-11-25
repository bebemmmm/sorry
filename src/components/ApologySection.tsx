import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

const apologyReasons = [
  {
    title: 'Özümü çox rahat apardım',
    text: 'Dediyin kimi hər şeyin düzələcəyini fərz alıb, addımlarını elə atırmışam. Bir gün həqiqət üzümə çarpanda o an anladım ki səhv etmişəm.',
  },
  {
    title: 'Dinləməkdən qaçındım',
    text: 'Sən mənə səhv olduğumu deyəndə, mən sənə tamamiylə qulaq asıb, səsisə səs verməmişəm, hansı ki bu yanlış anlaşılmaya gətirib çıxıb.',
  },
  {
    title: 'Səni üzdüm',
    text: 'Bu həyatda görmək istəmədiyim tək bir şey var idisə, oda səni üzgün görmək idi :(',
  },

];

export function ApologySection() {
  return (
    <div className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-6xl mb-8 text-gray-800">
          Həqiqətən, çox üzr istəyirəm
        </h2>
        <p className="text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
          Momentin içində olanda, insan həqiqətən etdiyi səhvin fərqinə varmaqda çətinlik çəkir. Sən həqiqətən daha yaxşılarına layiqsən, və bunu sənə vermək üçün əlimdən gələnin ən yaxşısı etməyə hazıram.
        </p>
      </motion.div>

      <div className="space-y-8 mb-16">
        {apologyReasons.map((reason, index) => (
          <ApologyCard key={index} reason={reason} index={index} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-xl text-center"
      >
        <h3 className="text-4xl mb-6 text-rose-600">Çox dərs aldım</h3>
        <div className="space-y-4 text-xl text-gray-700 leading-relaxed">
          <p>
            Öyrəndim ki, sevgi təkcə hisslərdən ibarət deyil, dözüm, səbr, inanc, və başarının 2 tərəf tərəfindən birləşdirilməsi idi.
          </p>
          <p>
            Danışmaq təkcə danışmaq demək deyil, həmçinin anlayıb və anlayış qarşılamaqdır.
          </p>
          <p>
            Vəziyyət nə olursa olsun, ilişkidə həmişə çabalamaq, vuruşmaq və mübarizə aparmaq lazımdır, son momentə qədər.
          </p>
          <p className="text-2xl text-rose-500 mt-8">
            Hansı ki sən, mübarizə aparmağa dəyəcək bir qadınsan.
          </p>
        </div>
      </motion.div>
    </div>
  );
}

function ApologyCard({ reason, index }: { reason: typeof apologyReasons[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
        <div className="flex items-start gap-6">
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-rose-500 flex items-center justify-center text-white text-xl">
            {index + 1}
          </div>
          <div className="flex-1">
            <h3 className="text-2xl mb-3 text-gray-800 group-hover:text-rose-600 transition-colors">
              {reason.title}
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">{reason.text}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
