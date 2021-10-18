import './style/style.css';

export const Footer = () => {
  return (
    <>
      <div className="footer__left-info">
        <div>
          © 2001– 2018 ООО <span className='important-info'>«СпейсВэб»</span>
        </div>
        <div>
          Все права защищены.
        </div>
        <div>
          Лицензия <span className='important-info'>№163230</span>
        </div>
      </div>
      <div className="footer__right-info">
        <div>
          <span className='important-info'>+7 (812) 334-12-22</span> (в Санкт-Петербурге)
        </div>
        <div>
          <span className='important-info'>+7 (495) 663-16-12</span> (в Москве)
        </div>
        <div>
          <span className='important-info'>(800) 100-16-15</span> (бесплатно по России)
        </div>
      </div>
    </>
  )
};