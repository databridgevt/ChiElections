import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  HttpException,
  NotImplementedException,
  Body,
} from '@nestjs/common';
import { CreateElectionDTO } from '../dto/create-election.dto';
import { ElectionService } from './election.service';

@Controller('election')
export class ElectionController {
  constructor(private electionService: ElectionService) {}

  @Post()
  async postNewElection(@Body() createElectionDTO: CreateElectionDTO) {
    console.log('Request Received');

    try {
      await this.electionService.createElection(createElectionDTO)
    } catch (err) {
      // I probably caught the 500 thrown when something can't be stored in a database
    }

    return `Created Election: ${createElectionDTO.year}`
  }

  @Get()
  async getElection() {
    
  }

  @Delete()
  async deleteElection() {

  }

  @Put()
  async updateElection() {
    
  }
}
