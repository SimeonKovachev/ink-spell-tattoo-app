export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="container pt-32 mx-auto py-16 px-4 sm:px-6 lg:px-8 text-gray-300">
        <div className="max-w-3xl mx-auto space-y-8">
          {/* Заглавна секция */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">
              Политика за поверителност
            </h1>
            <p className="text-gray-400">
              Последна актуализация: 30 декември 2024
            </p>
          </div>

          {/* Въведение */}
          <div className="prose prose-invert max-w-none">
            <p className="text-lg">
              Тази Политика за поверителност описва нашите политики и процедури
              относно събирането, използването и разкриването на Вашата
              информация, когато използвате Услугата, и Ви информира за Вашите
              права за поверителност и как законът Ви защитава.
            </p>
            <p className="text-lg mt-4">
              Ние използваме Вашите лични данни, за да предоставяме и
              подобряваме Услугата. Използвайки Услугата, Вие се съгласявате със
              събирането и използването на информация съгласно тази Политика за
              поверителност.
            </p>
          </div>

          {/* Тълкуване и дефиниции */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-white">
              Тълкуване и дефиниции
            </h2>

            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                Тълкуване
              </h3>
              <p className="text-gray-300">
                Думите, чиито първи букви са главни, имат значения, определени
                при следните условия. Следните дефиниции ще имат едно и също
                значение, независимо дали са в единствено или множествено число.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                Дефиниции
              </h3>
              <p className="text-gray-300 mb-4">
                За целите на тази Политика за поверителност:
              </p>
              <ul className="space-y-4 list-disc pl-6">
                <li>
                  <p>
                    <strong className="text-white">Компания</strong> (наричана
                    също &quot;Компанията&quot;, &quot;Ние&quot;,
                    &quot;Нас&quot; или &quot;Нашата&quot; в този договор) се
                    отнася до Ink Spell.
                  </p>
                </li>
                <li>
                  <p>
                    <strong className="text-white">
                      &quot;Бисквитки&quot;
                    </strong>{" "}
                    са малки файлове, които се поставят на Вашия компютър или
                    мобилно устройство от уебсайт и съдържат данни за Вашата
                    история на сърфиране.
                  </p>
                </li>
                <li>
                  <p>
                    <strong className="text-white">Държава</strong> се отнася
                    до: България
                  </p>
                </li>
                <li>
                  <p>
                    <strong className="text-white">Устройство</strong> означава
                    всяко устройство, което може да осъществи достъп до
                    Услугата.
                  </p>
                </li>
                <li>
                  <p>
                    <strong className="text-white">Лични данни</strong> са всяка
                    информация, която се отнася до идентифицирано или
                    идентифицируемо физическо лице.
                  </p>
                </li>
                <li>
                  <p>
                    <strong className="text-white">Услуга</strong> се отнася до
                    Уебсайта.
                  </p>
                </li>
                <li>
                  <p>
                    <strong className="text-white">Данни за използване</strong>{" "}
                    се отнасят до данни, които се събират автоматично.
                  </p>
                </li>
              </ul>
            </div>
          </section>

          {/* ======= НОВАТА СЕКЦИЯ: Разширена информация ======= */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-white">
              Събиране и използване на лични данни
            </h2>
            <p className="text-gray-300">
              Може да събираме няколко вида информация за различни цели, за да
              Ви предоставим и подобрим нашата Услуга.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-white">Информация за контакт:</strong>{" "}
                име, имейл адрес, телефонен номер и др., които Вие предоставяте
                доброволно.
              </li>
              <li>
                <strong className="text-white">Технически данни:</strong>{" "}
                IP-адрес, тип браузър, версия на браузъра, страници на Услугата,
                които посещавате, час и дата на Вашето посещение, уникални
                идентификатори на устройства и други диагностични данни.
              </li>
              <li>
                <strong className="text-white">Данни от формуляри:</strong>{" "}
                когато попълвате формуляри за записване на час или контакт, може
                да се изисква допълнителна информация за предоставяне на
                конкретна услуга.
              </li>
            </ul>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-white">Правни основания</h2>
            <p className="text-gray-300">
              Ние обработваме Вашите Лични данни при спазване на действащото
              законодателство и на следните основания:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-white">Съгласие:</strong> Когато ни
                предоставите лични данни доброволно (напр. чрез формуляр).
              </li>
              <li>
                <strong className="text-white">
                  Изпълнение на договорно задължение:
                </strong>{" "}
                за да изпълним услугите, които сте заявили.
              </li>
              <li>
                <strong className="text-white">Законен интерес:</strong> за да
                подобрим Услугата, да предотвратяваме измами и да защитаваме
                правата си.
              </li>
            </ul>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-white">
              Съхранение и защита на данните
            </h2>
            <p className="text-gray-300">
              Ние прилагаме подходящи организационни и технически мерки, за да
              защитим Вашите данни от неоторизиран достъп, промяна, разкриване
              или унищожаване.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-white">
                  Продължителност на съхранение:
                </strong>{" "}
                Личните данни се съхраняват толкова дълго, колкото е необходимо
                за изпълнение на целите, описани в тази Политика за
                поверителност, или както се изисква от закона.
              </li>
              <li>
                <strong className="text-white">Защита на данни:</strong>{" "}
                Използваме криптиране (където е приложимо) и ограничен достъп до
                системи, където се съхраняват Вашите данни.
              </li>
            </ul>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-white">
              Вашите права за поверителност
            </h2>
            <p className="text-gray-300">
              В зависимост от приложимото законодателство, може да имате право:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-white">Право на достъп:</strong>{" "}
                Възможност да получите копие от Вашите Лични данни.
              </li>
              <li>
                <strong className="text-white">Право на корекция:</strong>{" "}
                Коригиране на неточни или непълни Лични данни.
              </li>
              <li>
                <strong className="text-white">Право на изтриване:</strong> Да
                поискате изтриване на Вашите данни, когато няма правна причина
                да ги обработваме.
              </li>
              <li>
                <strong className="text-white">
                  Право на ограничаване на обработването:
                </strong>{" "}
                В определени случаи може да ограничите достъпа до Вашите данни.
              </li>
              <li>
                <strong className="text-white">
                  Право на възражение срещу обработването:
                </strong>{" "}
                Когато обработваме данните въз основа на нашия законен интерес.
              </li>
            </ul>
            <p className="text-gray-300">
              За да упражните тези права, свържете се с нас чрез предоставените
              канали за контакт в края на тази Политика.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-white">
              Връзки към други сайтове
            </h2>
            <p className="text-gray-300">
              Нашата Услуга може да съдържа връзки към сайтове на трети страни,
              които не са под наш контрол. Ако кликнете върху трета страна, ще
              бъдете пренасочени към сайта на тази трета страна. Съветваме Ви да
              прегледате Политиката за поверителност на всеки сайт, който
              посещавате.
            </p>
            <p className="text-gray-300">
              Ние не носим отговорност за съдържанието, практиките или
              политиките за поверителност на сайтовете или услугите на трети
              страни.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-white">
              Промени в Политиката
            </h2>
            <p className="text-gray-300">
              Ние можем да актуализираме нашата Политика за поверителност при
              необходимост. Ще Ви уведомим за всяка промяна, като публикуваме
              нова версия на тази страница. Препоръчваме Ви периодично да
              преглеждате тази Политика за последни промени.
            </p>
            <p className="text-gray-300">
              Промените влизат в сила, когато бъдат публикувани на тази
              страница.
            </p>
          </section>
          {/* ======= Край на новите секции ======= */}

          {/* Проследяващи технологии и "бисквитки" */}
          <section className="space-y-6">
            <h3 className="text-2xl font-semibold text-white">
              Проследяващи технологии и &quot;бисквитки&quot;
            </h3>
            <p className="text-gray-300">
              Ние използваме &quot;бисквитки&quot; за събиране на данни за
              активността в нашата Услуга и съхранение на определена информация.
            </p>

            <ul className="space-y-4 list-disc pl-6">
              <li>
                <strong className="text-white">
                  Сесийни &quot;бисквитки&quot;
                </strong>{" "}
                са временно съхранявани и се изтриват при затваряне на браузъра.
              </li>
              <li>
                <strong className="text-white">
                  Постоянни &quot;бисквитки&quot;
                </strong>{" "}
                са запазени дори след затваряне на браузъра.
              </li>
            </ul>
          </section>

          {/* Свържете се с нас */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-white">Свържете се с нас</h2>
            <p className="text-gray-300">
              Ако имате въпроси относно тази Политика за поверителност или
              желаете да упражните Вашите права, моля свържете се с нас:
            </p>
            <ul className="space-y-4 list-disc pl-6">
              <li>
                Чрез имейл:{" "}
                <a
                  href="mailto:support@ink-spell.com"
                  className="text-blue-400 hover:text-blue-300"
                >
                  support@ink-spell.com
                </a>
              </li>
              <li>
                Чрез телефон:{" "}
                <a
                  href="tel:+359894300545"
                  className="text-blue-400 hover:text-blue-300"
                >
                  +359894300545
                </a>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
