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
                    <strong className="text-white">Акаунт</strong> означава
                    уникален акаунт, създаден за Вас, за да получите достъп до
                    нашата Услуга или части от нея.
                  </p>
                </li>
                <li>
                  <p>
                    <strong className="text-white">Партньор</strong> означава
                    юридическо лице, което контролира, е контролирано от или е
                    под общ контрол с дадена страна, като „контрол“ означава
                    притежание на 50% или повече от дяловете или правата на
                    собственост.
                  </p>
                </li>
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
              Ако имате въпроси относно тази Политика за поверителност:
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
