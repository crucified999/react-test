export const PreviewPanel = ({ sections }) => {
  return (
    <div className='preview-panel'>
          <div className='resume-preview'>
            <h1>Резюме</h1>
            {sections.map((section) => (
              <div key={section.id} className='resume-section'>
                <h2>
                  {
                    {
                      experience: 'Опыт работы',
                      education: 'Образование',
                      skills: 'Навыки',
                      certificates: 'Сертификаты',
                      about: 'О себе',
                    }[section.type]
                  }
                </h2>

                {section.type === 'experience' && (
                  <div className='experience-item'>
                    <h3>{section.data.position || 'Должность'}</h3>
                    <div className='company'>
                      {section.data.company || 'Компания'}
                    </div>
                    <div className='period'>
                      {section.data.period || 'Период работы'}
                    </div>
                    <p>
                      {section.data.description ||
                        'Описание обязанностей и достижений'}
                    </p>
                  </div>
                )}

                {section.type === 'education' && (
                  <div className='education-item'>
                    <h3>{section.data.institution || 'Учебное заведение'}</h3>
                    <div className='degree'>
                      {section.data.degree || 'Специальность'}
                    </div>
                    <div className='period'>
                      {section.data.period || 'Период обучения'}
                    </div>
                  </div>
                )}

                {section.type === 'skills' && (
                  <ul className='skills-list'>
                    {section.data.items.map(
                      (skill, i) => skill && <li key={i}>{skill}</li>
                    )}
                  </ul>
                )}

                {section.type === 'certificates' && (
                  <div className='certificate-item'>
                    <h3>{section.data.title || 'Название сертификата'}</h3>
                    <div className='issuer'>
                      {section.data.issuer || 'Организация'}
                    </div>
                    <div className='date'>
                      {section.data.date || 'Дата получения'}
                    </div>
                  </div>
                )}

                {section.type === 'about' && (
                  <p className='about-text'>
                    {section.data.text || 'Информация о себе'}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
  );
};