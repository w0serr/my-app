import Image from "next/image";
export default function About() {
  return (
    <div className="main">
      <div className="container mx-auto mt-[80px] px-4 py-16">
        <h1 className="text-3xl text-[#22253B] font-bold mb-[50px] text-center">
          О нас
        </h1>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2">
            <p className="text-[#22253B] mb-4">
              Мы - команда увлеченных преподавателей и разработчиков,
              стремящихся дать людям навыки, необходимые для процветания в
              постоянно развивающемся мире технологий
            </p>
            <p className="text-[#22253B] mb-4">
              Наша миссия - обеспечить доступное и увлекательное обучение
              которые способствуют глубокому пониманию концепций
              программирования концепций. Мы верим в практическое обучение,
              реальные проекты, и поддерживаем сообщество, которое поощряет
              развитие и сотрудничество
            </p>
            <p className="text-[#22253B] mb-4">
              Мы предлагаем комплексную учебную программу, охватывающую широкий
              спектр языков программирования, фреймворков и технологий. Наши
              курсы рассчитаны на слушателей любого уровня, от начинающих до
              опытных разработчиков, желающих расширить свои навыки
            </p>
            <p className="text-[#22253B] mb-4">
              Присоединяйтесь к нам в этом захватывающем путешествии обучения и
              открытий. Вместе мы определим будущее технологий и дадим
              возможность следующее поколение новаторов
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <Image
              src="/group-young-business-people-modern-office.jpg"
              alt="About Us"
              width={500}
              height={300}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-8 items-center justify-between px-4 md:px-0">
        <div className="w-full md:w-1/2">
          <Image
            src="/students-working-project.jpg"
            alt="Students working on a project"
            width={500}
            height={300}
            className="rounded-lg"
          />
        </div>
        <div className="w-full md:w-1/2">
          <p className="text-[#22253B] mb-4">
            Мы предлагаем комплексный подход к обучению, который сочетает в себе
            теоретические знания и практические навыки. В наших курсах вы
            найдете:
          </p>
          <ul className="list-disc ml-4">
            <li className="text-[#22253B] mb-2">
              Интерактивные уроки и задания
            </li>
            <li className="text-[#22253B] mb-2">
              Реальные проекты для практического опыта
            </li>
            <li className="text-[#22253B] mb-2">
              Доступ к современным технологиям и ресурсам
            </li>
            <li className="text-[#22253B] mb-2">
              Поддержка и обратная связь от опытных преподавателей
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
