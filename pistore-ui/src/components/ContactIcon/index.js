import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faDiscord, faTwitter, faInstagram, faGolang } from '@fortawesome/free-brands-svg-icons';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'; // Đã sửa import
import { GoGlobe as LanguageIcon } from 'react-icons/go'; // Ví dụ sử dụng biểu tượng GoGlobe từ thư viện react-icons
const ContactIcon = ({ contactName }) => {
    let icon = null;
    let title = '';
    switch (contactName.toLowerCase()) {
        case 'facebook':
            icon = <FontAwesomeIcon icon={faFacebook} title="Facebook" />;
            title = 'Facebook';
            break;
        case 'globe':
            icon = <LanguageIcon icon={faGolang} title="Globe" />; // Sử dụng LanguageIcon thay thế cho Fagoflag
            title = 'Globe';
            break;
        case 'discord':
            icon = <FontAwesomeIcon icon={faDiscord} title="Discord" />;
            title = 'Discord';
            break;
        case 'twitter':
            icon = <FontAwesomeIcon icon={faTwitter} title="Twitter" />;
            title = 'Twitter';
            break;
        case 'instagram':
            icon = <FontAwesomeIcon icon={faInstagram} title="Instagram" />;
            title = 'Instagram';
            break;
        default:
            icon = <FontAwesomeIcon icon={faEllipsis} title="Unknown" />; // Sử dụng faEllipsis từ thư viện solid-svg-icons
            title = 'Unknown';
            break;
    }

    return <span title={title}>{icon}</span>;
};

export default ContactIcon;
