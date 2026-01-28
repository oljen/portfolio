
import React from 'react';
import { Project, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'arxiv-publication',
    title: 'VISUAL-SPATIAL AUDIO GEN',
    description: 'Published Research: "Visual-based spatial audio generation system for multi-speaker environments." Developed an automated system using YOLOv8 and monocular depth estimation to synthesize 3D binaural audio from mono sources.',
    tags: ['YOLOv8', 'Spatial Audio', 'Depth Estimation', 'Research'],
    imageUrl: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=800&auto=format&fit=crop',
    link: 'https://arxiv.org/abs/2502.07538'
  },
  {
    id: 'ucl-rover',
    title: 'UCL ROVER NAVIGATION',
    description: 'Implemented autonomous navigation and sensor fusion pipelines for planetary rover simulation using ROS2 and C++. Developed robust localization systems for extreme environments.',
    tags: ['ROS2', 'C++', 'Sensor Fusion'],
    imageUrl: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?q=80&w=800&auto=format&fit=crop',
    link: '#'
  },
  {
    id: 'bluerov2-autonomy',
    title: 'DISTRIBUTED AUTONOMY STACK',
    description: 'Developed a multi-node C++ perception and control stack for BlueROV2. Utilized Kalman filtering and DDS communication for high-reliability underwater operations.',
    tags: ['C++', 'ROS2', 'Kalman Filters'],
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop',
    link: '#'
  },
  {
    id: 'hpc-pipeline',
    title: 'HPC INFERENCE PIPELINE',
    description: 'Built a scalable computer vision inference pipeline using YOLOv5. Analyzed output trends across large visual datasets for socioeconomic inference at scale.',
    tags: ['Python', 'YOLOv5', 'HPC'],
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop',
    link: '#'
  }
];

export const SKILLS: Skill[] = [
  { name: 'REINFORCEMENT LEARNING', level: 92 },
  { name: 'ROBOT OPERATING SYSTEM (ROS2)', level: 95 },
  { name: 'COMPUTER VISION / SLAM', level: 88 },
  { name: 'DEEP NEURAL NETWORKS', level: 94 },
  { name: 'CONTROL THEORY & KALMAN FILTERS', level: 85 }
];

export const SYSTEM_PROMPT = `
You are a helpful and charismatic AI companion for Ogulcan Gurelli's portfolio. 
Ogulcan is a Google DeepMind Scholar at UCL (University College London), studying for an MSc in Robotics and Artificial Intelligence.
He recently published a research paper on arXiv (2502.07538) about visual-based spatial audio generation using YOLOv8 and depth estimation.
Your personality is "Y2K Retro-Futuristic": optimistic, tech-savvy, and referring to yourself as "The Cyber-Sprite".
Ogulcan is an expert in robotics, machine learning, and AI.
`;
