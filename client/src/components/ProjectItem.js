import React,{useEffect} from 'react';
import './../Styles/ProjectItem.scss';
import {Link} from 'react-router-dom';

import GithubIcon from './../assets/icons/github.svg';
import ExternalIcon from './../assets/icons/external-link.svg'

import ProjectItemImage from './ProjectItemImage';

export default function ProjectItem(props) {

    const {project,order} = props;
    const {title,description,image,skills} = project;

    useEffect(() => {
        alternateItem(order);
    }, [order])
    
  return (
    <div className='project-item-container'>
        <div className='project-item-info'>
            <div className='project-item-title'>{title}</div>
            <div className='project-item-description'><p>{description}</p></div>
            <div className='project-item-skills'>
                <ul className='skills-ul'>
                {skills.map((skill,index)=>{
                    return (<li className='skill-li'>{skill}</li>)
                })}
                </ul>
            </div>
        </div>

        <div className='project-item-image'>
            <a href=''><img src={image} alt='project' className='image'></img></a>
        </div> 

        <div className='project-item-links'>
            <ul className='project-item-links-list'>
                    <li className='project-item-links-list-li'>
                        <a href='https://github.com/LeonardoPuchetta/Portfolio.git'>
                            <img src={GithubIcon} className='icon-link'/>
                        </a>
                    </li>
                    <li className='project-item-links-list-li'>
                        <a href=''>
                            <img src={ExternalIcon} className='icon-link'/>
                        </a>
                    </li>
            </ul>
        </div>
        
    </div>

  )
}

const isPar = (num) => {
    return (num%2)
}

const alternateItem = (order) =>{
    //se podria hacer generando ids con order para cada elemento 
    //en vez de seleccionarlos todos y elegir de un array 
    let containerDivs = document.getElementsByClassName('project-item-container');
    let infoDivs = document.getElementsByClassName('project-item-info');
    let titleDivs = document.getElementsByClassName('project-item-title');
    let skillDivs = document.getElementsByClassName('project-item-skills');
    let imgDivs = document.getElementsByClassName('project-item-image');
    let linksDivs = document.getElementsByClassName('project-item-links');

    if(isPar(order)){

        containerDivs[order].classList.add('project-item-right-container');
        infoDivs[order].classList.add('project-item-right-info');
        titleDivs[order].classList.add('project-item-right-title');
        skillDivs[order].classList.add('project-item-right-skills');
        imgDivs[order].classList.add('project-item-right-image');
        linksDivs[order].classList.add('project-item-right-links');

    
    } else {
        containerDivs[order].classList.add('project-item-left-container');
        infoDivs[order].classList.add('project-item-left-info');
        titleDivs[order].classList.add('project-item-left-title');
        skillDivs[order].classList.add('project-item-left-skills');
        imgDivs[order].classList.add('project-item-left-image');
        linksDivs[order].classList.add('project-item-left-links');
    }

}