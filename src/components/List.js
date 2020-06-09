import React from 'react';

const List = () => {
    return (
        <div className='skills-list'>
            <ul>
                <li>
                    <img 
                        src='/images/maya-logo.png' 
                        width='auto'
                        height='35'
                        alt='Maya Logo' />
                    <img 
                        src='/images/blender-logo.png' 
                        width='auto'
                        height='40'
                        alt='Blender Logo' />
                </li>
                <li>
                    <img 
                        src='/images/3ds-max-logo.jpg' 
                        width='auto'
                        height='35'
                        alt='3DS Max Logo' />
                </li>
                <li>
                    <img
                        src='/images/cinema-4d-logo.png' 
                        width='auto'
                        height='70'
                        alt='Cinema 4D Logo' />
                    <img 
                        src='/images/zbrush-logo.png' 
                        width='auto'
                        height='80'
                        alt='ZBrush Logo' />
                </li>
                <br />
                <li>
                    <img 
                        src='/images/redshift-logo.png' 
                        width='auto'
                        height='70'
                        alt='Redshift Logo' />
                </li>
                <li>
                    <img 
                        src='/images/arnold-logo.png' 
                        width='auto'
                        height='25'
                        alt='Arnold Logo' />
                    <img 
                        src='/images/corona-logo.png' 
                        width='auto'
                        height='25'
                        alt='Corona Logo' />
                </li>
                <li>
                    <img 
                        src='/images/renderman-logo.png' 
                        width='auto'
                        height='70'
                        alt='RenderMan Logo' />
                </li>
                <br />
                <li>
                    <img 
                        src='/images/s-painter-logo.jpg' 
                        width='auto'
                        height='80'
                        alt='Substance Painter Logo' />
                    <img 
                        src='/images/s-designer-logo.jpg' 
                        width='auto'
                        height='80'
                        alt='Substance Designer Logo' />
                </li>
                <li>
                    <img
                        src='/images/photoshop-logo.png' 
                        width='auto'
                        height='45'
                        alt='Photoshop Logo' />
                    <img
                        src='/images/mari-logo.jpeg' 
                        width='auto'
                        height='50'
                        alt='Mari Logo' />
                </li>
                <br />
                <li>
                    <img
                        src='/images/after-effects.png' 
                        width='auto'
                        height='45'
                        alt='After Effects Logo' />
                    <img
                        src='/images/premiere-pro.png' 
                        width='auto'
                        height='45'
                        alt='Premiere Pro' />
                </li>
                <li>
                    <img
                        src='/images/nuke-logo.png' 
                        width='auto'
                        height='40'
                        alt='Nuke Logo' />
                </li>
            </ul>
        </div>
    );
};

export default List;