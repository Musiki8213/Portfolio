import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const Skills = () => {
  const { ref, isVisible } = useScrollAnimation();
  const getSkillIcon = (skill: string) => {
    const iconMap: { [key: string]: React.ReactElement } = {
      'React': (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.65c-.957-.552-2.18-.552-3.134 0L3.602 7.254c-.957.552-1.59 1.617-1.59 2.75v4.992c0 1.133.633 2.198 1.59 2.75l10.112 5.9c.957.552 2.18.552 3.134 0l10.112-5.9c.957-.552 1.59-1.617 1.59-2.75v-4.992c0-1.133-.633-2.198-1.59-2.75l-10.112-5.9zm-1.567 1.804c.277-.16.63-.16.906 0l10.112 5.9c.277.16.46.435.46.75v4.992c0 .315-.183.59-.46.75l-10.112 5.9c-.277.16-.63.16-.906 0l-10.112-5.9c-.277-.16-.46-.435-.46-.75v-4.992c0-.315.183-.59.46-.75l10.112-5.9z"/>
        </svg>
      ),
      'TypeScript': (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 4.687 4.687 0 0 1-1.5-.493v-2.63a5.495 5.495 0 0 0 3.207 1.06c.333 0 .624-.03.872-.09a2.008 2.008 0 0 0 .623-.258c.17-.12.3-.262.393-.426a1.164 1.164 0 0 0 .14-.605c0-.287-.092-.54-.276-.756-.184-.218-.456-.42-.815-.606-.36-.186-.784-.357-1.275-.513-1.167-.452-2.035-1.014-2.604-1.686-.57-.67-.854-1.494-.854-2.47 0-.614.123-1.141.369-1.582.246-.44.58-.804 1.004-1.09a4.494 4.494 0 0 1 1.47-.629 5.933 5.933 0 0 1 1.77-.257zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/>
        </svg>
      ),
      'JavaScript': (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.343-.375-.8-.628-1.503-.628-.802 0-1.449.33-1.811.99l-1.562 1.035c-.911-1.616-1.416-2.297-2.071-2.297-.18 0-.36.045-.53.135-.36.18-.585.495-.585 1.05 0 .72.405 1.035 1.125 1.35.9.36 1.38.585 1.665 1.005.36.585.24 1.56-.39 2.115-.585.51-1.5.765-2.415.765-.72 0-1.26-.135-1.755-.405l1.125-1.305c.405.18.81.27 1.305.27.585 0 .915-.18 1.14-.495.27-.36.18-.765-.045-1.05-.27-.36-.915-.63-1.56-.945-.585-.27-1.245-.585-1.74-1.14-.495-.555-.66-1.305-.405-2.07.27-.765.915-1.35 1.95-1.65.585-.18 1.23-.225 1.95 0 .72.225 1.305.675 1.695 1.305l-1.38.945c-.315-.54-.72-.765-1.305-.765-.36 0-.675.09-.9.27-.27.225-.36.54-.225.855.18.405.675.63 1.305.855.99.405 1.695.81 2.16 1.44.495.675.585 1.5.36 2.34z"/>
        </svg>
      ),
      'HTML5': (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622h10.125l-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.955-.81-.188-2.11H6.64l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"/>
        </svg>
      ),
      'CSS3': (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622h10.125l-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.955-.81-.188-2.11H6.64l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"/>
        </svg>
      ),
      'Tailwind CSS': (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98.98 2.12 2.12 4.59 2.12 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C15.61 7.15 14.47 6 12 6zm-5 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98.98 2.12 2.12 4.59 2.12 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C10.61 13.15 9.47 12 7 12z"/>
        </svg>
      ),
      'Node.js': (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.105-0.116,2.105-0.89V7.037c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.331 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.561-0.311-0.938-0.93-0.938-1.603V6.921 c0-0.673,0.377-1.292,0.938-1.602l8.795-5.082c0.557-0.306,1.296-0.306,1.848,0l8.794,5.082c0.563,0.313,0.941,0.929,0.941,1.602 v10.152c0,0.673-0.378,1.292-0.941,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,0.607c0.124,0.101,0.318,0.072,0.318-0.082l0.268-1.711c0-0.143-0.076-0.215-0.216-0.289 c-0.315-0.161-0.916-0.409-2.549-0.535V6.92c0-0.177-0.143-0.253-0.313-0.253h-1.643c-0.177,0-0.313,0.076-0.313,0.253v1.373 c-1.998,0.172-3.631,0.889-3.631,2.812c0,1.916,1.329,2.406,3.977,2.763c2.731,0.365,3.009,0.548,3.009,1.187 c0,0.646-0.454,1.241-2.36,1.241c-2.093,0-2.951-0.605-3.15-0.963c-0.062-0.115-0.176-0.154-0.293-0.154 c-0.05,0-0.1,0.01-0.151,0.03l-1.562,0.853c-0.124,0.072-0.187,0.215-0.149,0.361c0.124,0.535,0.666,1.187,2.109,1.649v1.373 c0,0.177,0.136,0.253,0.313,0.253h1.643c0.17,0,0.313-0.076,0.313-0.253v-1.455c0.177-0.015,0.351-0.03,0.521-0.06 c2.024-0.231,3.224-1.187,3.224-2.812H19.099z"/>
        </svg>
      ),
      'Git': (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.644-.223 1.387-.083 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.882 0-2.6.177-.178.383-.312.602-.402v-6.659c-.219-.089-.425-.223-.602-.401-.545-.545-1.426-.658-2.102-.334L7.636 4.703.45 11.893c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"/>
        </svg>
      ),
      'GitHub': (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      'Version Control': (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.644-.223 1.387-.083 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.882 0-2.6.177-.178.383-.312.602-.402v-6.659c-.219-.089-.425-.223-.602-.401-.545-.545-1.426-.658-2.102-.334L7.636 4.703.45 11.893c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"/>
        </svg>
      ),
      'Responsive Design': (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      'RESTful APIs': (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      'Database Design': (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
      'Server Architecture': (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      'User Research': (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      'Wireframing': (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      'Prototyping': (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      'Design Systems': (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM14 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3z" />
        </svg>
      ),
      'Accessibility': (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      'User Testing': (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      'Agile Methodologies': (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      'Problem Solving': (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      'Team Collaboration': (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    };

    return iconMap[skill] || (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    );
  };

  const skillCategories = [
    {
      category: 'Frontend',
      skills: [
        'React',
        'TypeScript',
        'JavaScript',
        'HTML5',
        'CSS3',
        'Tailwind CSS',
        'Responsive Design',
      ],
    },
    {
      category: 'Backend',
      skills: [
        'Node.js',
        'RESTful APIs',
        'Database Design',
        'Server Architecture',
      ],
    },
    {
      category: 'UI/UX',
      skills: [
        'User Research',
        'Wireframing',
        'Prototyping',
        'Design Systems',
        'Accessibility',
        'User Testing',
      ],
    },
    {
      category: 'Tools & Others',
      skills: [
        'Git',
        'GitHub',
        'Version Control',
        'Agile Methodologies',
        'Problem Solving',
        'Team Collaboration',
      ],
    },
  ];

  return (
    <section
      id="skills"
      ref={ref}
      className={`py-20 bg-[#ffffff] dark:bg-[#2a2a2a] text-[#000000] dark:text-[#e5e5e5] relative overflow-hidden ${
        isVisible ? 'animate-fade-in-up' : 'opacity-0'
      }`}
    >
      {/* Subtle background decoration */}
      <div className="absolute top-1/2 left-1/4 w-36 h-36 bg-[#3b82f6] dark:bg-[#3b82f6] rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-5 animate-pulse-slow"></div>
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="inline-flex items-center gap-3">
            <svg className="w-8 h-8 md:w-10 md:h-10 text-[#3b82f6] dark:text-[#60a5fa]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            Skills
          </span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const icons = [
              <svg key="frontend" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>,
              <svg key="backend" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>,
              <svg key="uiux" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>,
              <svg key="tools" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            ];
            return (
              <div
                key={index}
                className="bg-[#ffffff] dark:bg-[#3a3a3a] p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group border-t-4 border-transparent hover:border-[#3b82f6] dark:hover:border-[#60a5fa]"
              >
                <h3 className="text-2xl font-semibold mb-4 text-[#3b82f6] dark:text-[#60a5fa] flex items-center gap-2">
                  <span className="text-[#3b82f6] dark:text-[#60a5fa] group-hover:scale-110 transition-all duration-300">
                    {icons[index] || icons[0]}
                  </span>
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-[#3b82f6] dark:bg-[#3b82f6] text-[#ffffff] rounded text-sm font-medium hover:scale-105 hover:shadow-md transition-all duration-300 cursor-default flex items-center gap-2"
                    >
                      <span className="flex-shrink-0">
                        {getSkillIcon(skill)}
                      </span>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
