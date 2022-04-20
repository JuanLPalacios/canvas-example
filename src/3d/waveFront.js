import Face from './face';
import Object3D from './object3D';

export default class WaveFront {
  constructor(url) {
    this.url = url;
    this.vectors = [];
    this.texture = [];
    this.normals = [];
    this.faces = [];
    this.objects = [];
  }

  async load() {
    const text = await fetch(this.url).then((response) => response.text());
    let obj; let
      face;
    text.split(/\n/g).map((line) => line.split(/\s+/g))
      .forEach((line) => {
        switch (line[0]) {
          case 'o':
            obj = new Object3D();
            this.objects.push(obj);
            break;
          case 'f':
            line = line.slice(1, 4).map((group) => group.split(/\//g).map((x) => Number.parseInt(x, 10) - 1));
            face = new Face(
              this.vectors[line[0][0]],
              this.vectors[line[1][0]],
              this.vectors[line[2][0]],
              this.normals[line[0][1]],
            );
            this.faces.push(face);
            obj.faces.push(face);
            break;
          case 'v':
            this.vectors.push(line.slice(1, 4).map((number) => Number.parseFloat(number)));
            break;
          case 'vt':
            this.texture.push(line.slice(1, 3).map((number) => Number.parseFloat(number)));
            break;
          case 'vn':
            this.normals.push(line.slice(1, 4).map((number) => Number.parseFloat(number)));
            break;
          default:
        }
      });
  }
}