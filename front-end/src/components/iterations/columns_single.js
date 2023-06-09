export let columns_data_single = [
    {
        key: 'iteration',
        label: 'Iteration info',
        leaf: true,
        children: [
            {
                key: 'created_at',
                label: 'Created'
            },
            {
                key: 'user_name',
                label: 'User'
            }
        ]
    },
    {
        key: 'dataset',
        label: 'Dataset info',
        leaf: true,
        children: [
            {
                key: 'dataset.name',
                label: 'Dataset Name'
            },
            {
                key: 'dataset.version',
                label: 'Version'
            }
        ]
    },
    {
        key: 'model',
        label: 'Model info',
        leaf: true,
        children: [
            {
                key: 'model_name',
                label: 'Model'
            }
        ]
    }
]

export let columns_data_checked_single = {
    iteration: {
        checked: true,
        partialChecked: false,
    },
    created_at: {
        checked: true,
        partialChecked: false,
    },
    user_name: {
        checked: true,
        partialChecked: false,
    },
    dataset: {
        checked: true,
        partialChecked: false,
    },
    'dataset.name': {
        checked: true,
        partialChecked: false,
    },
    'dataset.version': {
        checked: true,
        partialChecked: false,
    },
    model: {
        checked: true,
        partialChecked: false,
    },
    model_name: {
        checked: true,
        partialChecked: false,
    },
}

export let columns_list_single = ['created_at', 'model_name', 'user_name', 'dataset.name', 'dataset.version']