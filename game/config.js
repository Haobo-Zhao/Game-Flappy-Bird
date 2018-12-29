// 全局配置对象
const config = {
    fps: {
        _description: 'dynamic fps',
        value: 60,
        min: 1,
        max: 120,
    },

    slit: {
        _description: 'vertical space between two pipes',
        value: 125,
        mix: 0,
        max: 250,
    },

    gap: {
        _description: 'horizontal space between two pipes',
        value: 150,
        mix: 0,
        max: 300,
    },
}
// 不能放在 literal 里面， 放在里面没有办法让 enumerable 为 false，
// 那么循环创造控制组件的时候就会被访问到，不应访问到这个属性
Object.defineProperty(config, 'debug', {
    value: true,
    writable: false,
    configurable: false,
    enumerable: false,
})

const controlTemplate = function (key, item) {
    // date-key是用来确定，这个控制组件要修改的是 config 的哪一个对象
    let t = `
        <div class="container-control-${key}">
            <input 
                id="id-${key}-input"
                class="joe-slider-control"
                type="range" 
                value="${item.value}" 
                data-item="config.${key}" 
                min="${item.min || 1}" max="${item.max || 300}"
            >
            <span class="description-control">${item.value}</span>
            <span class="value-control">${item._description}</span>
        </div>
    `
    return t
}

const generateAllControls = function () {
    let keys = Object.keys(config)
    let container = e('#id-container-controls')
    for (let k of keys) {
        let t = controlTemplate(k, config[k])
        container.insertAdjacentHTML('beforeend', t)
    }
}

// const bindEvents = function () {
//     let keys = Object.keys(config)
//     for (let k of keys) {
//         let ele = e(`#id-${k}-input`)
//         let parent = ele.closest(`.container-control-${k}`)
//         ele.addEventListener('input', () => {
//             // 在这里，动态调整全局配置的值
//             eval(`${ele.dataset.item}.value = ${ele.value}`)
//             parent.querySelector('.description-control').innerText = ele.value
//         })
//     }
// }

const bindEvents = function () {
    bindAll('.joe-slider-control', 'input', function (event) {
        // 拿到变动的 element
        let target = event.target
        // 更新全局配置
        eval(`${target.dataset.item}.value = ${target.value}`)
        // 更新这个 item 显示的值
        target.closest('div').querySelector('.description-control').innerHTML = target.value
    })
}

const setConfiguration = function () {
    generateAllControls()
    bindEvents()
}

setConfiguration()
