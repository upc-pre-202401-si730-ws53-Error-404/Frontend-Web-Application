export class Sowing {
    constructor(id = '', start_date = '', harvest_date = '', area_land = 0, user_id = '', crop_id = '', crop_name = '', phenological_phase = '') {
        this.id = id;
        this.start_date = start_date;
        this.harvest_date = harvest_date;
        this.area_land = area_land;
        this.user_id = user_id;
        this.crop_id = crop_id;
        this.crop_name = crop_name;
        this.phenological_phase = phenological_phase;
    }
}