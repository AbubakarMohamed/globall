import helpfullLinksData from '../../../data/navbar/helpfulllinks.json';

export default function HelpfullLinks() {
  const handleClick = (e, link) => {
    e.preventDefault();
    const element = document.querySelector(link);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (helpfullLinksData.length === 0) {
    return <p className="footer_links_empty">No helpful links available.</p>;
  }

  return (
    <ul className="footer_links" aria-label="Helpful links">
      {helpfullLinksData.map((item) => (
        <li key={item.id}>
          <a 
            href={item.link}
            onClick={(e) => handleClick(e, item.link)}
          >
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  );
}