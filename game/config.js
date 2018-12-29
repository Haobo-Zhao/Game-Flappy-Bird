// 全局配置对象
const config = {
    fps: {
        _description: 'dynamic fps',
        value: 60,
    },

    slit: {
        _description: 'vertical space between two pipes',
        value: 200,
    },

    gap: {
        _description: 'horizontal space between two pipes',
        value: 200,
    },
}

const controlTemplate = function (key, item) {
    let t = `
        <div class="joe-container-control">
            <input 
                type="range" 
                data-key="${key}" value="${item.value}" 
                min="${item.min || 1}" max="${item.max || 300}"
            >
            <span class="joe-description-control">${item.value}</span>
            <span class="joe-value-control">${item._description}</span>
        </div>
    `
    return t
}

const generateAllControls = function() {
    let keys = Object.keys(config)
    let container = e('#id-container-controls')
    for(let k of keys) {
        let t = controlTemplate(k, config[k])
        container.insertAdjacentHTML('beforeend', t)
    }
}

generateAllControls()