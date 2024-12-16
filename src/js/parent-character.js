class Character {
    constructor(name, type) {
        this.name = name;
        this.type = type;
        this.health = 100;
        this.level = 1;
        this.attack = 0;
        this.defence = 0;        
        this.validate(name, type);        
    }

    validate(name, type) {
        if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
            throw new Error('Имя должно быть строкой длиной от 2 до 10 символов');
        }
                 
        const validTypes = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
        if (!validTypes.includes(type)) {
            throw new Error('Некорректный тип персонажа');
        }
    }
        
    levelUp() {
        if (this.health === 0) {
            throw new Error('Нельзя повысить левел умершего');
        }
        this.level += 1;
        this.attack = Math.round(this.attack * 1.2);
        this.defence = Math.round(this.defence * 1.2);
        this.health = 100;
    }

    damage(points) {
        this.health = Math.max(this.health - points * (1 - this.defence / 100), 0); // чтобы health не был < 0
    }
}

export default Character;