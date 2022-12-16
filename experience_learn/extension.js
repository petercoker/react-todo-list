module.exports = {
    "name": "ExperienceLearn",
    "publisher": "Sample",
    "cards": [{
        "type": "ExperienceLearnCard",
        "source": "./src/cards/ExperienceLearnCard",
        "title": "ExperienceLearn Card",
        "displayCardType": "ExperienceLearn Card",
        "description": "This is an introductory card to the Ellucian Experience SDK",
        "pageRoute": {
            "route": "/",
            "excludeClickSelectors": ['a']
        }
    }],
    "page": {
        "source": "./src/page/router.jsx"
    }
}