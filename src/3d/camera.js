import { vec3 } from 'gl-matrix';

export default class Camera {
  constructor() {
    this.location = vec3.create();
    this.rotation = vec3.create();
    this.scale = vec3.create();
    this.focalLength = 0.05;
  }
}