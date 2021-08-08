//MOST OF THE CODE ARE TAKEN FROM STAR DEFENDERS 2D;

//const HTentity = module.exports.HTentity;

import HTcampaign from '../HTcampaign.js'
import HTsound from '../HTsound.js'
import HTkeystates from '../HTkeystates.js'

import HTentity from './HTentity.js'
import HTgun from './HTgun.js'
import HTeffect from './HTeffect.js'
import HTbullet from './HTbullet.js'
import HTblock from './HTblock.js'
import HTwater from './HTwater.js'
import HTwaterphys from './HTwaterphys.js'

class HTcharacter extends HTentity
{
    static init_class()
    {
        HTcharacter.img_characterhelmet = [
            HTcampaign.CreateImageFromFile( 'helmet_ar' ),
            HTcampaign.CreateImageFromFile( 'helmet_ar2'),
            HTcampaign.CreateImageFromFile( 'helmet_ar3'),
        ];

        HTcharacter.AI_PLAYER = 0;
        HTcharacter.AI_HUMANOID = 1;
        HTcharacter.AI_WINDAR = 2;

        HTcharacter.characters = [];

        HTcampaign.entity_classes[ this.name ] = this;
    }

    GetBloodEffect()
    {
        if ( this._faction.variant === 'Windar' )
        return HTeffect.TYPE_BLOOD_BLUE;

        if ( this._faction.variant === 'Human', 'Humanoid')
        return HTeffect.TYPE_WALL_OHNO;

        return HTeffect.TYPE_BLOOD;
    }
    GetBloodEffectFilter()
    {
        if ( this._faction.variant === 'Windar' )
        return 'hue-rotate(73deg)';

        return '';
    }
}