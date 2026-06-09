export function isAliveKing(metrics){
    for (let metric of metrics) {
        console.log(metric);
        console.log(metric.metric);
        console.log(metric.value);
        
        if (Number(metric.value) <= 0){
            switch (metric.metric) {
                case 'social':
                    return [false, 'social'];
                case 'defense':
                    return [false, 'defense'];
                case 'economy':
                    return [false, 'economy'];
                case 'religion':
                    return [false, 'religion'];
            }
        }
    }
    
    return true;
}