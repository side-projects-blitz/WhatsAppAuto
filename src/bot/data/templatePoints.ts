import { TemplatePoints } from "../interfaces/templatePoints";

export let templatePoints: TemplatePoints | undefined = undefined;

export function getTemplatePoints() {
    return templatePoints;
}

export function setTemplatePoints(template: TemplatePoints) {
    templatePoints = template;
}

export function clearTemplatePoints() {
    templatePoints = undefined;
}
