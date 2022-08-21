import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const experience = () => {
  return (
    <section id="experience">
      <h5>What skils I Have</h5>
      <h2>My Experiences</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icons' />
              <div>
                <h4>HTML/CSS</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icons' />
              <div>
                <h4>UI Kits: Bootstrap, Tailwind CSS., Material UI</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icons' />
              <div>
                <h4>JavaScript, jQuery, Vue.js/React.js</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icons' />
              <div>
                <h4>Template Engine : Smarty & Twig</h4>
              </div>
            </article>
          </div>
        </div>


        <div className="experience__backend">
        <h3>Backend Development</h3>
        <div className="experience__content">
          <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icons' />
            <div>
              <h4>Php, Symfony framework with Shopware</h4>
            </div>
          </article>
          <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icons' />
            <div>
              <h4>Apache, NodeJS, NPM, MySQL/MongoDB, Redis/ElastiCache</h4>
            </div>
          </article>
          </div>
        </div>

        <div className="experience__devops">
        <h3>DevOps</h3>
        <div className="experience__content">
          <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icons' />
            <div>
              <h4>AWS : EC2, RDS Databases, ECS/ECR, S3 </h4>
            </div>
          </article>
          <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icons' />
            <div>
              <h4>CloudFront/CloudFlare, CloudWatch,Route53</h4>
            </div>
          </article>
          <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icons' />
            <div>
              <h4>+ IAM, VPC, Load Balancer, Subnets</h4>
            </div>
          </article>
          <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icons' />
            <div>
              <h4>Docker and strong understanding of Kubernetes</h4>
            </div>
          </article>
          <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icons' />
            <div>
              <h4>Git, CLI,Bash scripting, <br />
                  Experience with any Linux/UNIX-like System</h4>
            </div>
          </article>
          <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icons' />
            <div>
              <h4>Familiar with several components  <br />
                of the GCP and Azure Cloud Ecosystem</h4>
            </div>
          </article>
          </div>
        </div>

        <div className="experience__other">
        <h3>Currently Learnign/Working with </h3>
        <div className="experience__content">
          <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icons' />
            <div>
              <h4>Kubernetes</h4>
            </div>
          </article>
          <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icons' />
            <div>
              <h4>Terraform & Ansible</h4>
            </div>
          </article>
          <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icons' />
            <div>
              <h4> AWS CloudFormation</h4>
            </div>
          </article>
          </div>
        </div>
        
      </div>
      </section>
  )
}

export default experience