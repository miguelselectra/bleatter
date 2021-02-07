export default function ThemeSelector ({ themeSelected, setTheme }) {
  const themes = ['App white', 'App dark'];

  const handleSetTheme = (e) => {
    setTheme(e.target.value)
  };

  return (
      <select
        name='select'
        className='theme-selector'
        value={themeSelected}
        onChange={handleSetTheme}
      >
        {
          themes.map((theme, index) => {
            return <option value={theme} key={index}>{theme}</option>;
          })
        }
      </select>
  );
}