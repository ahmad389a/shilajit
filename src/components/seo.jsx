import PropTypes from "prop-types";
import { Helmet, HelmetProvider } from "react-helmet-async";

const SEO = ({ title, titleTemplate, description }) => {
    return (
        <HelmetProvider>
            <Helmet>
                <meta charSet="utf-8" />
                <title>
                    {title} | {titleTemplate}
                </title>
                <meta name="description" content={description} />
            </Helmet>
        </HelmetProvider>
    );
};

SEO.propTypes = {
    title: PropTypes.string,
    titleTemplate: PropTypes.string,
    description: PropTypes.string,
}

SEO.defaultProps = {
    title: "Ren Shilajit kjøp naturens gave til ditt sunne liv -",
    titleTemplate: "Naturensskatter",
    description: "Opplev bedre helse med ren Shilajit fra Himalaya! Få autentiske Shilajit-produkter for mer energi og velvære. Handle nå!",
};

export default SEO;