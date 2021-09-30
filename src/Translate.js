export default class Translate
{
    constructor(options)
    {
        this.build                      = options.build;
        this.version                    = options.version;
        this.startCallback              = (options.startCallback !== undefined) ? options.startCallback : null;

        this.dataUrl                    = options.dataUrl;

        this.language                   = options.language;
        this.translations               = {};

        this.loadInitialData();
    }

    loadInitialData()
    {
        $.getJSON(this.dataUrl, function(data){
            if(data !== undefined)
            {
                this.translations = data;
            }
        }.bind(this)).done(() => {
            if(this.startCallback !== null)
            {
                this.startCallback();
            }
        });
    }

    _(value, replace)
    {
        if(this.translations[value] !== undefined)
        {
            value = this.translations[value];
        }

        if(replace !== undefined)
        {
            return value.replace('%1$s', replace);
        }

        return value;
    }
}