function getActionTypesForApiCall (actionsTypes: string[]) {
    return actionsTypes.reduce((acc: Record<string, string>, key: string) => {
        ['REQUEST', 'SUCCESS', 'FAILURE'].forEach(prefix => {
            const typeName = `${prefix}_${key}`;
            acc[typeName] = typeName;
        });
        return acc;
    }, {});
}

export default getActionTypesForApiCall;
