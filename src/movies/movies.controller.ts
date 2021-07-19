import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return "get All Movies";
  }

  @Get(':id')
  getById(@Param('id') movieId: number) {
    return `get Movie with id ${movieId}`;
  }

  @Post()
  create(@Body() movieData) {
    return movieData;
  }

  @Delete(':id')
  delete(@Param('id') movieId: number) {
    return `get Movie delete ${movieId}`;
  }

  @Patch(':id')
  update(@Param('id') movieId: number, @Body() movieData) {
    return {
      id: movieId,
      ...movieData,
    }
  }

}
``
